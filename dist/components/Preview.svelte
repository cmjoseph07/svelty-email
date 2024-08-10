<script>import { styleToString } from "../utils";
export let preview = "";
const renderWhiteSpace = (text) => {
  const maxLength = 150;
  if (text.length > maxLength) {
    throw new RangeError(
      `Input exceeds maximum length of ${maxLength} characters. A good practice is to keep this text under 90 characters.`
    );
  }
  const whiteSpaceCodes = "\xA0\u200C\u200B\u200D\u200E\u200F\uFEFF";
  return whiteSpaceCodes.repeat(maxLength - text.length);
};
</script>

<div
	id="__svelte-email-preview"
	style={styleToString({
		display: 'none',
		overflow: 'hidden',
		lineHeight: '1px',
		opacity: 0,
		maxHeight: 0,
		maxWidth: 0
	})}
	{...$$restProps}
>
	{preview}
	<div>
		{renderWhiteSpace(preview)}
	</div>
</div>
