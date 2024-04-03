<script>import { styleToString } from "../utils";
export let style = {};
let className = void 0;
export { className as class };
const styleDefault = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  ...style
};
</script>

<td style={styleToString(styleDefault)} role="row" {...$$restProps} class={className}>
	<slot />
</td>
