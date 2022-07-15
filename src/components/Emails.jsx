import { Email } from "./Email"

export const Emails = ({toggleRead, toggleStar, filteredEmails, searchEmails, toggleSearch}) => {
    const emails = (toggleSearch) ? searchEmails : filteredEmails
    return (
        <ul>
          {emails.map((email, index) => (
            <Email key={index} 
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}/>
          ))}
        </ul>
    )
}