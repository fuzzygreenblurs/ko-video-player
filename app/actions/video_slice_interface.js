export function generateSlice(sliceData = {}) {
  console.log("gets to generate slice action");
  return {
    type: 'GENERATE_SLICE',
    sliceData
  }
}
