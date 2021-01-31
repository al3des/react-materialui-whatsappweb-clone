import superheroes from "superheroes"

const contacts = Array(20)
  .fill()
  .map((_, i) => {
    let name = superheroes.random()
    return generateNewContact(name, i)
  })
export default contacts

export function generateNewContact(name, i) {
  return {
    id: i + 1,
    name,
    avatarUrl: `https://avatars.dicebear.com/4.5/api/bottts/:${name}.svg`,
    phoneNumber: Math.floor(Math.random() * 10),
  }
}
