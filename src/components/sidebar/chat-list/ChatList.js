import contacts from "../../../data/contacts"
import { Grid, makeStyles } from "@material-ui/core"
import ContactItem from "./ContactItem"

let useStyles = makeStyles({
  root: {
    overflowY: "auto",
  },
  contactItem: {
    cursor: "pointer",
  },
})

export default function ChatList() {
  let classes = useStyles()

  return (
    <Grid container justify="space-between" className={classes.root}>
      {contacts.map((contact) => (
        <Grid key={contact.id} item xs={12} className={classes.contactItem}>
          <ContactItem contact={contact} />
        </Grid>
      ))}
    </Grid>
  )
}
