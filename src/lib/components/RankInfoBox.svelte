<script lang="ts">
  $: grayscale = 100 - count * 100 / 4;
  export let rank: string;
  export let count: number;
</script>

<div class="rank-info-box">
  <div class="rank">
    {rank}
  </div>
  <div
    class="count"
    style={`filter: grayscale(${grayscale}%);`}
  >
    {count}
  </div>
</div>

<style>
  .rank-info-box {
    display: grid;
    grid-template-columns: 32px 20px;
    grid-template-rows: min-content;
    border: 1px solid #000080;
    border-radius: 4px;
  }
  .rank,
  .count {
    padding: 2px 3px;
    text-align: center;
    font-weight: 600;
    font-size: medium;
  }
  .rank {
    background: #FFFFFF;
    color: #000080;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .count {
    background: #39FF14;
    color: #FFFFFF;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
</style>

