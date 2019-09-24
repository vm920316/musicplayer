export default function hash (val) {
  let hash = 0
  if (val === null || val === undefined) {
    return hash
  }
  if (val && typeof val === 'object') {
    val = JSON.stringify(val)
  }
  let i
  let chr
  if (val.length === 0) return hash
  for (i = 0; i < val.length; i++) {
    chr = val.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0
  }
  return hash
}
