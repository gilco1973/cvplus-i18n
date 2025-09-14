# I18n Submodule Agents

This folder contains links to specialized agents for the i18n submodule.

## Primary Domain Expert
- **i18n-specialist**: Located at `~/.local/share/claude-007-agents/.claude/agents/cvplus/i18n-specialist.md`
  - Translation management and workflow
  - Multi-language support implementation
  - Cultural adaptation strategies
  - RTL language support
  - Professional localization

## Supporting Specialists
- **frontend-expert**: React component internationalization
- **backend-expert**: Firebase Functions localization services
- **premium-specialist**: Subscription and billing localization
- **cv-processing-specialist**: Multi-language CV processing

## Universal Specialists
- **code-reviewer**: Quality assurance and security review
- **debugger**: i18n troubleshooting and RTL issues
- **git-expert**: Repository management and submodule operations
- **test-writer-fixer**: Comprehensive testing for multi-language support

## Usage
Use the Task tool to invoke these specialists:

```
Task(subagent_type="i18n-specialist", description="Implement new language support", prompt="Add French locale support with cultural adaptation")
```

All agents are located in the global collection at:
`/Users/gklainert/.local/share/claude-007-agents/.claude/agents/`