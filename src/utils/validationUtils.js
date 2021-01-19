// regex validation rules
const USERNAME_VALIDATION_RULE = /^[a-zA-Z0-9]+$/;
// method which creates rules for antd input fields
const createRule = (ruleName, ruleValue, message) => ({
  [ruleName]: ruleValue,
  message
});
// field is required?
export const required = (message) => createRule('required', true, message);
const pattern = (pattern, message) => createRule('pattern', pattern, message);

export const isUserNameValid = (requiredMsgId, invalidFullnameMsgId) => [
  required(requiredMsgId),
  pattern(USERNAME_VALIDATION_RULE, invalidFullnameMsgId)
];
