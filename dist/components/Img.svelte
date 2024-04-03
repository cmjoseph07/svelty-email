<script>import { styleToString } from "../utils";
export let style = {};
let className = void 0;
export { className as class };
export let alt = "";
export let src = "";
export let width = "0";
export let height = "0";
const styleDefault = {
  display: "block",
  outline: "none",
  border: "none",
  textDecoration: "none",
  ...style
};
</script>

<img {alt} {src} {width} {height} style={styleToString(styleDefault)} {...$$restProps} class={className}/>
