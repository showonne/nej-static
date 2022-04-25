module.exports = function (source) {
  // Apply some transformations to the source...
  return `module.exports = ${JSON.stringify(source)}`
}