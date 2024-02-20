<script lang="ts">
  $: grayscale = 100 - count * 100 / 4;
  export let rank: string;
  export let count: number;
</script>

<div class="rank-info-box">
  <p class="rank source-sans-3-text">
    {rank}
  </p>
  <p
    class="count source-sans-3-text"
    style={`filter: grayscale(${grayscale}%);`}
  >
    {count}
  </p>
</div>

<style>
  .rank-info-box {
    display: grid;
    grid-template-columns: 25.9px 16px;
    grid-template-rows: 25.9px;
    border: 1px solid #000080;
    border-radius: 4px;
  }
  .rank,
  .count {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: large;
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

