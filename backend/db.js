exports.mock = {
  notes: {},
  jobs: [{
    'key': 'workflow:scheduleUndeliveredMessagesJob',
    'className': 'eu.europa.ec.digit.wf.scheduler.services.engine.invokers.WFSEJB3InvokerJob',
    'description': 'Tries to deliver undelivered messages',
    'data': {
      'ejb': 'java:global.wf-activiti-rest-sample-app.wf-activiti-impl.WFMessageRedeliveryScheduler',
      'method': 'scheduleUnsentMessages'
    }}, {
    'key': 'workflow:scheduleUndeliveredEmailsJob',
    'className': 'eu.europa.ec.digit.wf.scheduler.services.engine.invokers.WFSEJB3InvokerJob',
    'description': 'Tries to deliver undelivered emails',
    'data': {
      'ejb': 'java:global.wf-activiti-rest-sample-app.wf-activiti-impl.WFMessageRedeliveryScheduler',
      'method': 'scheduleUnsentEmails'
    }
  }],
  triggers: [{
    'key': 'workflow:scheduleUndeliveredMessagesTrigger1',
    'className': 'org.quartz.impl.triggers.CronTriggerImpl',
    'jobKey': 'workflow:scheduleUndeliveredMessagesJob',
    'description': 'Ea esse ipsum velit laboris nulla aliquip.',
    'cronExpression': '0 23 ? * MON-FRI',
    'startTime': '1501017519665',
  }, {
    'key': 'workflow:scheduleUndeliveredMessagesTrigger2',
    'className': 'org.quartz.impl.triggers.CronTriggerImpl',
    'jobKey': 'workflow:scheduleUndeliveredMessagesJob',
    'description': 'Commodo excepteur proident excepteur occaecat laborum enim deserunt ut reprehenderit nulla eu et ullamco.',
    'cronExpression': '0 0/30 * * * ?',
    'startTime': '1501025419565'
  }, {
    'key': 'workflow:scheduleUndeliveredMessagesTrigger3',
    'className': 'org.quartz.impl.triggers.CronTriggerImpl',
    'jobKey': 'workflow:scheduleUndeliveredEmailsJob',
    'description': 'Aliquip proident mollit magna adipisicing ipsum nisi excepteur.',
    'cronExpression': '* * * ? * 2-6/2',
    'startTime': '1510945219665'
  }, {
    'key': 'workflow:scheduleUndeliveredMessagesTrigger4',
    'className': 'org.quartz.impl.triggers.CronTriggerImpl',
    'jobKey': 'workflow:scheduleUndeliveredMessagesJob',
    'description': 'Lorem quis incididunt officia et ex pariatur consequat.',
    'cronExpression': '0 23 ? * MON-FRI',
    'startTime': '1501017519665',
  }]
};
