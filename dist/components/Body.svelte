<script>import { styleToString } from "../utils";
export let style = {};
let className = void 0;
export { className as class };
</script>

<body {...$$restProps} style={styleToString(style)} class={className} >
	<slot />
</body>
