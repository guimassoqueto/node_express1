function randomID(): string {
    return (Math.random() + 1).toString(36).substring(5)
}

export { randomID };