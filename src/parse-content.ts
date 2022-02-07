export const parseContent = (
  content?: string,
  template?: string,
  templateArgs?: Record<string, string>
): string | undefined => {
  if (template && templateArgs) {
    content = template;
    for (var arg in templateArgs) {
      content = content.replace("{" + arg + "}", templateArgs[arg]);
      content = content.replace("{" + arg + "?}", templateArgs[arg]);
    }

    content = content.replace(/\{(\w+)\?\}/, "");
  }

  return content;
};
