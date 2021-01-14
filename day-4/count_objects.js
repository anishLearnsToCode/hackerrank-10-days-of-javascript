function getCount(objects) {
    return objects.filter((o) => o.x === o.y).length;
}
