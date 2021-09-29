import React, { useContext } from 'react';
import AppContext from 'src/AppProvider';
import { SelectGroupStyle, StyledButton } from './SelectGroup.style';

const SelectGroup = ({ title, style }) => {
    const { group, setGroup } = useContext(AppContext);

    return (
        <SelectGroupStyle style={style}>
            <h2 className="heading">{title}</h2>
            <div className="buttonsWrapper">
                <StyledButton
                    selected={group === 'mieszkańcy'}
                    onClick={() => setGroup('mieszkańcy')}
                    className="button"
                    type="button"
                >
                    Dla mieszkańców
                </StyledButton>
                <StyledButton
                    selected={group === 'gminy'}
                    onClick={() => setGroup('gminy')}
                    className="button"
                    type="button"
                >
                    Dla gmin
                </StyledButton>
                <StyledButton
                    selected={group === 'przedsiębiorstwa'}
                    onClick={() => setGroup('przedsiębiorstwa')}
                    className="button"
                    type="button"
                >
                    Dla przedsiębiorców
                </StyledButton>
            </div>
        </SelectGroupStyle>
    );
};

export default SelectGroup;
