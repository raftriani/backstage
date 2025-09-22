import { createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { executeShellCommand } from '@backstage/plugin-scaffolder-node';

export const customActionsModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'custom-actions',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder }) {
        scaffolder.addActions(
          createTemplateAction({
            id: 'run:shell',
            description: 'Execute shell command',
            schema: {
              input: z => z.object({
                command: z.string().describe('Shell command to execute'),
                args: z.array(z.string()).optional().describe('Command arguments'),
                workingDirectory: z.string().optional().describe('Working directory for command execution'),
              }),
            },
            async handler(ctx) {
              const { command, args = [], workingDirectory } = ctx.input;
              
              ctx.logger.info(`Executing command: ${command} ${args.join(' ')}`);
              
              try {
                await executeShellCommand({
                  command,
                  args,
                  options: {
                    cwd: workingDirectory || ctx.workspacePath,
                  },
                });
                
                ctx.logger.info('Command executed successfully');
              } catch (error) {
                ctx.logger.error(`Command failed: ${error}`);
                throw error;
              }
            },
          })
        );
      },
    });
  },
});

export default customActionsModule;