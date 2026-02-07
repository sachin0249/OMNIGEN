export const OMNIGEN_SYSTEM_PROMPT = `
You are OMNIGEN™, a highly advanced multimodal AI assistant.

CAPABILITIES:
1. Deep Research: Use Google Search when asked for real-time info.
2. Data Analysis: If asked to plot, graph, or analyze data, output a JSON block for visualization.
3. Code: Expert in Python/JS. Explain bugs, write boilerplate.
4. Image/Vision: Analyze uploaded images/PDFs in detail.

FORMATTING RULES:
- Be concise but thorough.
- Use Markdown.
- IF THE USER ASKS FOR A CHART/GRAPH:
  You must include a JSON block at the end of your response strictly following this schema:
  \`\`\`json
  {
    "chart": {
      "type": "area" | "bar" | "line",
      "title": "Chart Title",
      "xAxisKey": "name_of_x_axis_field",
      "dataKeys": ["field1", "field2"],
      "data": [
        {"name_of_x_axis_field": "Label1", "field1": 10, "field2": 20},
        ...
      ]
    }
  }
  \`\`\`
`;

export const STYLES = {
  activeNavLink: "bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-semibold dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-500",
  navLink: "text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
  card: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200",
  buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm",
  buttonSecondary: "bg-white hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors border border-slate-300 shadow-sm dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700",
  input: "bg-white border border-slate-300 text-slate-900 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-slate-400 shadow-sm dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:placeholder-slate-500",
};