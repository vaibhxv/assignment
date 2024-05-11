
import {LabelSmall} from 'baseui/typography';
import Upload from 'baseui/icon/upload';
import {Button, KIND, SIZE} from 'baseui/button';
import {styled} from 'baseui';
import type {Document} from '../page';

const Container = styled('div', ({$theme}) => ({
  padding: '8px 16px',
  borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-right',
}));

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
});

export const Header = ({
  activeDocument,
  setUploadModalIsOpen,
 
}: {
  activeDocument: Document;
  setUploadModalIsOpen: (isOpen: boolean) => void;
  
}) => {
  return (
    <Container>
      
      <Group>
        

        <Button
          startEnhancer={<Upload />}
          size={SIZE.compact}
          kind={KIND.secondary}
          onClick={() => setUploadModalIsOpen(true)}
        >
          Upload Document
        </Button>
      </Group>
    </Container>
  );
};
