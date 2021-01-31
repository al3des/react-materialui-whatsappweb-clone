import superheroes from "superheroes"

const contacts = Array(20)
  .fill()
  .map((_, i) => {
    let name = superheroes.random()
    return {
      id: i + 1,
      name,
      avatarUrl: `https://avatars.dicebear.com/4.5/api/bottts/:${name}.svg`,
    }
  })
export default contacts
