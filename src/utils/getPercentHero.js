function getPercentHero() {
    const body = document.body
    const docEl = document.documentElement

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
    const clientTop = docEl.clientTop || body.clientTop || 0
    const top = scrollTop - clientTop

    const clientHeight = docEl.clientHeight || body.clientHeight || 0

    return Math.round(top) / clientHeight
}

module.exports = getPercentHero
