class Artikel {
  static counter = 1
  id = Artikel.counter++
  index
  name
  gekauft = false

  constructor(name, index) {
    this.name = name
    this.index = index
  }
}

export default Artikel
