import React from 'react';
import PropTypes from 'prop-types';

const Snippet = ({
  value,
  index,
  handleRemoveSnippet,
  isDark,
  flicker,
  isCopied,
  handleSnippetCopy,
  isHashed
}) => {
  const wikiRef = `https://en.wikipedia.org/wiki/${value.split(' ').join('_')}`;
  let hashCheckedValue;
  let hashCheckedValueSimple;

  if(isHashed && (value.includes('(') || value.includes(','))) {
    let tempHashCheckedValue;
    if (value.includes('(')) {
      tempHashCheckedValue = hashCheckedValue = value
        .replace(/[(]/g, '#')
        .replace(/[)]/g, '')
    }
    if (value.includes(',')) {
      tempHashCheckedValue = value.replace(/[,]/g, '#')
    };
    hashCheckedValue = tempHashCheckedValue.split(/[#\s]{2,}/).reverse().join(' ')
    hashCheckedValueSimple = tempHashCheckedValue.split(/[#\s]{2,}/)[0];
  } else {
    hashCheckedValue = value;
  } 

  const snippetStyle = { background: '' };
  if (isCopied && !flicker) {
    snippetStyle.background = 'var(--peach';
  } else {
    snippetStyle.background = isDark ? 'var(--ash)' : 'var(--faded-ash)';
  }

  return (
    <div className="snippet-container">
      <div className="snippet">
        <div
          id={`${value}-${index}-A`}
          className="snippet-label"
          style={snippetStyle}
          data-value={hashCheckedValue}
          onClick={() => handleSnippetCopy(value, index, 'A')}
          onKeyUp={() => handleSnippetCopy(value, index, 'A')}
          role="button"
          tabIndex={0}
        >
          {value.length <= 30 ? value : `${value.slice(0, 30).trim()}...`}
        </div>
        {isHashed && (value.includes('(') || value.includes(',')) && (
          <div
          id={`${value}-${index}-B`}
          className="snippet-label"
          style={snippetStyle}
          data-value={hashCheckedValueSimple}
          onClick={() => handleSnippetCopy(value, index, 'B')}
          onKeyUp={() => handleSnippetCopy(value, index, 'B')}
          role="button"
          tabIndex={0}
        >
          {hashCheckedValueSimple.length <= 30 ? hashCheckedValueSimple : `${hashCheckedValueSimple.slice(0, 30).trim()}...`}
        </div>
        )}
        {isHashed && (value.includes('(') || value.includes(',')) && (
          <div className="strike-tag">
            <span style={{ color: 'var(--charcoal)' }} id="switch">
              ( )
            </span>
          </div>
        )}
        {isHashed && (
          <a
            href={wikiRef}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="wiki">W</div>
          </a>
        )}
        <div
          className="delete-tag"
          onClick={handleRemoveSnippet}
          onKeyUp={handleRemoveSnippet}
          role="button"
          tabIndex={0}
        >
          X
        </div>
      </div>
    </div>
  );
};

Snippet.propTypes = {
  value: PropTypes.string,
  index: PropTypes.number,
  handleRemoveSnippet: PropTypes.func,
  isDark: PropTypes.bool,
  flicker: PropTypes.bool,
  isCopied: PropTypes.bool,
  handleSnippetCopy: PropTypes.func,
  isHashed: PropTypes.bool
};

export default Snippet;
