import { FunctionComponent } from "react"
import Log from "../../types/Log"
import LogDaySummary from "../../types/LogDaySummary"
import { Status } from "../../../utils/constants";

interface ServiceLogProps {
    item: LogDaySummary,
    show: boolean
}

const StatusView: FunctionComponent<ServiceLogProps> = ({ item, show }) => {
    var translated_status
    switch (item.status) {
        case 'unknown':
            translated_status = 'Keine Daten'
            break
        case Status.OUTAGE:
            translated_status = 'Ausfall'
            break
        case Status.PARTIAL_OUTAGE:
            translated_status = 'Eingeschränkt verfügbar'
            break
        default:
            translated_status = 'Verfügbar'
    }
    return (
        <>
            {
                show &&
                <div className="absolute card mt-10 pl-5 pr-5">
                    <p>{item.date}</p>
                    <p>{translated_status}</p>
                </div>
            }
        </>
    )
}

export default StatusView;