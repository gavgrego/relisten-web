import Link from 'next/link'

import RowLoading from './RowLoading'

export default ({ height, children, href, active, loading, ...props }) => (
  <div className="row" style={{ minHeight: height }} {...props}>
    <style jsx>{`
      .row {
        min-height: 34px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #F1F1F1;
      }

      .row > :global(.content) {
        flex: 1;
        width: 100%;
        padding: 4px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }

      .row > :global(.content).active:after {
        content: "";
        width: 8px;
        height: 100%;
        background: #333;
        position: absolute;
      }

      .row > :global(.content) > :global(div) {
        align-self: stretch;
        display: flex;
        padding: 0 2px;
        justify-content: space-around;
        flex-direction: column;
      }

      .row > :global(.content) :global(.subtext), .row > :global(.content) > :global(div:nth-child(2)) {
        color: #979797;
        font-size: 0.7em;
      }

      .row > :global(.content).active > :global(div:nth-child(1)) {
        padding-left: 12px;
      }

      .row > :global(.content) > :global(div:nth-child(2)) {
        text-align: right;
      }

    `}</style>
    {loading && <RowLoading />}
    {href ? <Link href="/" as={href}><a className={`${active ? 'active' : ''} content`}>{children}</a></Link> : children ? <div className={`content ${active ? 'active' : ''}`}>{children}</div> : null}
  </div>
)
