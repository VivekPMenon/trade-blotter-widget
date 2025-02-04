import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './corporate-actions.module.scss';
import { reportsDataService } from '@/services/reports-data';
import { SearchableMarkdown } from '../markdown';


export interface CorporateActionsProps {
  isExpanded: boolean;
}

export function CorporateActions({ isExpanded }: CorporateActionsProps) {
  const markdown = `## Account Details

**Account:** 065492233-07  
**Holding Quantity:** -10  
**Term Details:** 1 SECURITIES DISTRIBUTION  
**Entitled Product ID:** 218937100 (CUS)  
**Pay Date:** **Jan 15, 2025**  



| **Type**     | **Date & Time**        | EMAIL | ALERT |
|-------------|----------------------|---|---|
| **Original**  | Jan 07, 2025 - 00:46  | Y | Y |
| **Update 1**  | Jan 07, 2025 - 18:46  | Y | Y |
| **Update 2**  | Jan 13, 2025 - 16:49  | Y | Y |
| **Update 3**  | Jan 13, 2025 - 21:46  | Y | Y |
| **Update 4**  | Jan 14, 2025 - 12:48  | Y | Y |
`;

  return (
    <div className={styles['corporate-actions']}>
      <div className={styles['chatbot']}>
        <div className={styles['search-bar']} >
          <input type="text" placeholder="Ask TransientAI anything - use '@' to find files, folders and other trading data" />
        </div>

        <div className={`${styles['corporate-actions-response']} scrollable-div height-vh-82`}>

          <div className={styles['corporate-action']}>
            <div className={styles['header']}>
              <i className='fa-solid fa-microphone-lines'></i>
              Mandatory Event Information Update: Name Change: CONSOL ENERGY INC, CMS ISIN: US2086DFT67

              <div className={styles['action-buttons']}>
                <div className={styles['button-container']}>
                  <i className='fa-regular fa-envelope'></i>
                </div>

              </div>
            </div>

            <div className='p-2'>
              <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>

          <div className={styles['corporate-action']}>
            <div className={styles['header']}>
              <i className='fa-solid fa-microphone-lines'></i>
              Mandatory Event Information Update: Name Change: CONSOL ENERGY INC, CMS ISIN: US2086DFT67

              <div className={styles['action-buttons']}>
                <div className={styles['button-container']}>
                  <i className='fa-regular fa-envelope'></i>
                </div>

              </div>
            </div>

            <div className='p-2'>
              <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>

        </div>
      </div>

      <div className={styles['email-content']}>
        {/* <SearchableMarkdown 
          markdownContent={reportsDataService.getEmailContentMock()} 
          className={isExpanded ? 'height-vh-82' : 'height-vh-40'} 
          title='Original Email'/> */}
        <SearchableMarkdown
          markdownContent={reportsDataService.getEmailContentMock()}
          className='height-vh-82'
          title='Original Email' />
      </div>
    </div>
  );
}