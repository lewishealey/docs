import React, { useState } from "react"
import Title from "./title"
import Text from "./text"
import TokenTable from './tokentable'
import actionTokens from '../assets/actions/action-tokens.svg'
import actionClose from '../assets/actions/action-close.svg'
import successIcon from '../assets/actions/success.svg'
import errorIcon from '../assets/actions/error.svg'
import jiraIcon from '../assets/actions/jira.svg'
import zeplinIcon from '../assets/actions/zeplin.svg'

const Detail = ({ caption, file, title, text, tokens, list, state, jira, zeplin }) => {
    const [modal, setModal] = useState(false);

    return <div className="detail-column">

        {title &&
            <Title>{title}</Title>
        }

        {text &&
            <Text>{text}</Text>
        }

        {file &&
            <div className={`detail center-content ${state}`}>

                <div className="detail-info">
                    {jira &&
                        <img src={jiraIcon} height="16" alt="View Jira" title="View Jira"/>
                    }
                    {zeplin &&
                        <img src={zeplinIcon} height="16" alt="View Zeplin" title="View Zeplin"/>
                    }
                </div>

                {tokens &&
                    <div onClick={() => setModal(!modal)}
                        className="modal-actions">
                        <img src={actionTokens} alt="View tokens" title="View tokens"/>
                    </div>
                }

                {state === 'error' &&
                    <div className="modal-actions">
                        <img src={errorIcon} alt="Do this" title="Do this"/>
                    </div>
                }
                {state === 'success' &&
                    <div className="modal-actions">
                        <img src={successIcon} alt="Don't do this" title="Don't do this"/>
                    </div>
                }
                <img src={file} alt="Component" title="Component"/>
            </div>
        }

        {caption && 
            <div className="caption">
                {caption}
            </div>
        }

        {list && 
            <ol className="list">
                {list.map(function(point) {
                    return <li>{point}</li>
                })}
            </ol>
        } 

         {modal &&
            <div className="modal-background center-content">     
                <div className="modal-content">
                    <div className="detail center-content">
                        <div role="button" onClick={() => setModal(!modal)}
                            className="modal-actions">
                            <img src={actionClose} alt="Close modal" title="Close modal"/>
                        </div>
                        <img src={file} alt="Component" title="Component"/>
                     </div>
                    <div style={{
                        padding: 12
                    }}>
                        <TokenTable 
                            component={tokens.component}
                            section={tokens.section}
                            version={tokens.version}
                        />
                    </div>
                </div>
            </div>
        }
    </div>;
}

export default Detail
