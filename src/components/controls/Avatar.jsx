import React, {useState} from 'react';
import {Popover, PopoverBody} from 'reactstrap';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid'

const AvatarContainer = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  border-radius: 50%;
  vertical-align: middle;
  border-style: none;
  img {
    display: none;
    width: 0;
    height: 0;
  }
`;

const LargeAvatar = styled(AvatarContainer)`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  margin-bottom: 0.5rem;
`;

export default function Avatar ({src, alt, title, id}) {
    const [isOpen, setOpen] = useState(false);
    if (!id) {
	    id = btoa(alt + src).replace(/(=|\/)/g, '');
    }

    const toggle = () => setOpen(!isOpen);
    return (<>
        <AvatarContainer src={src} id={id} />
        <Popover placement='right' target={id} isOpen={isOpen} toggle={toggle} trigger="hover">
            <PopoverBody>
                <div className="text-center">
	                {title}
                    <LargeAvatar src={src}/>
                    <div>{alt}</div>
                </div>
            </PopoverBody>
        </Popover>
    </>)
}
