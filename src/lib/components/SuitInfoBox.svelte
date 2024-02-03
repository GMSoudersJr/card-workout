<script lang="ts">
	import {ESuitSymbolUnicode} from "../../enums/suitSymbolUnicode";

  $: grayscale = 100 - count *  100 / 13;
  export let icon: ESuitSymbolUnicode;
  export let count: number;
  export let color: string;
</script>

<div class="suit-info-box">
  <div style:color={color} class="suit" >
    {@html icon}
  </div>
  <div class="count" style={`filter: grayscale(${grayscale}%)`}>
    {count}
  </div>
</div>

<style>
  .suit-info-box {
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    grid-template-rows: max-content;
    border-radius: 4px;
    border: 1px solid #000080;
  }
  .count {
    color: #FFFFFF;
    background: #39FF14;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .suit {
    background-color: #FFFFFF;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .suit,
  .count {
    font-size: medium;
    padding: 2px 3px;
    text-align: center;
    font-weight: 600;
  }
</style>
