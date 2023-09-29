import { ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton, DigiTypography } from '@digi/arbetsformedlingen-react';
import { CSSProperties } from 'react';

interface IModalProps {
  showDialog?: boolean;
  text: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const Modal = ({
  showDialog = false,
  text,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick = () => null,
  onSecondaryButtonClick = () => null,
}: IModalProps) => {
  const styles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  if (!showDialog) return null;

  return (
    <div className="dialog-container">
      <DigiTypography>
        <div className="dialog" style={styles}>
          <h3>{text}</h3>
          <div
            className="modal-buttons"
            style={{ display: 'flex', gap: '5px' }}
          >
            {primaryButtonText && (
              <DigiButton onAfOnClick={onPrimaryButtonClick}>
                {primaryButtonText}
              </DigiButton>
            )}
            {secondaryButtonText && (
              <DigiButton
                onAfOnClick={onSecondaryButtonClick}
                afVariation={ButtonVariation.SECONDARY}
              >
                {secondaryButtonText}
              </DigiButton>
            )}
          </div>
        </div>
      </DigiTypography>
    </div>
  );
};

export default Modal;
