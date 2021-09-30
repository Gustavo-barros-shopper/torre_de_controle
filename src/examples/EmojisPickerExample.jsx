import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'
import EmojisPicker from '../components/customized/EmojisPicker'

export default () => {
    const [ showPicker, setShowPicker ] = useState(false)
    const [ emoji, setEmoji ] = useState('')

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                EmojisPicker Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<EmojisPicker />`}</strong></h4>
                <p>Usage:</p>
                <pre>{`
                <EmojisPicker
                    isOpen={ boolean }
                    onEmojiClick={ function }
                    preload={ boolean }
                />
                `}</pre>
                <ul>
                    <li><strong>isOpen</strong> - define if it's to display EmojisPicker</li>
                    <li><srong>onEmojiClick</srong> - callback to run when clicking an emoji</li>
                    <li><strong>preload</strong> - indicates whether all emojis images, should be preloaded, or only when showing each category</li>
                </ul>
                <br />
                <p><strong>onEmojiClick:</strong> it takes two arguments.</p>
                <p>1. the click event</p>
                <p>2. an emoji object, which contains the following:</p>
                <ul>
                    <li><strong>emoji</strong> - The emoji symbol. May vary across OSs, in some it may not be visible to you</li>
                    <li><strong>unified</strong> - The actual emoji unicode</li>
                    <li><strong>activeSkinTone</strong> - The currently selected skin tone, regardless if the current emoji has one or not</li>
                    <li><strong>originalUnified</strong> - If the currently selected emoji has a skin tone modifier, <code>originalUnified</code> will hold the "neutral" code</li>
                    <li><strong>names</strong> - An array of one or more descriptive names for the emoji</li>
                </ul>
                <div style={{
                    position: 'relative'
                }}>
                    <EmojisPicker
                        isOpen={showPicker}
                        onEmojiClick={(e, emoji) => {
                            setEmoji(emoji.emoji)
                        }}
                        preload={false}
                    />
                    <button
                        style={{
                            marginTop: '15px',
                            marginBottom: '20px'
                        }}
                        className='btn btn-primary'
                        onClick={ () => setShowPicker(!showPicker) }
                    >Toggle EmojisPicker</button>
                    <p>Emojis:</p>
                    <div style={{
                        background: '#efefef',
                        padding: '10px'
                    }}>{ emoji }</div>
                </div>
            </CardBody>
        </Card>
    )
}