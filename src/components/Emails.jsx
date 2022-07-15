import { Email } from "./Email"

export const Emails = ({toggleRead, toggleStar, filteredEmails}) => {
    return (
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} 
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}/>
          ))}
        </ul>
    )
}