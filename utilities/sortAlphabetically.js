const sortAlphabetically = (array, { byAtribute } = { byAtribute: false} ) => {
    array.sort((a, b) => {
        if (byAtribute) {
            const itemA = a[byAtribute].toUpperCase()
            const itemB = b[byAtribute].toUpperCase()
            if (itemA < itemB)      { return -1 }
            else if (itemA > itemB) { return 1 }
            else                    { return 0 }
        }
        else {
            const itemA = a.toUpperCase()
            const itemB = b.toUpperCase()
            if (itemA < itemB)      { return -1 }
            else if (itemA > itemB) { return 1 }
            else                    { return 0 }
        }
    })

    return array
}

export default sortAlphabetically