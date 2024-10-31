import { useRenderData } from "streamlit-component-lib-react-hooks";
import { Streamlit } from "streamlit-component-lib";
import React from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';
import ObserveSize from 'react-observe-size';

function StreamlitDiffViewer() {
  const { theme, disabled, args } = useRenderData();

  return (
    <ObserveSize observerFn={(contentRect) => {
      Streamlit.setFrameHeight(contentRect.height);
    }}>
      <div>
        <ReactDiffViewer
          oldValue={args.oldText}
          newValue={args.newText}
          splitView={args.splitView}
          disableWordDiff={args.disabledWordDiff}
          leftTitle={args.leftTitle}
          rightTitle={args.rightTitle}
          useDarkTheme={args.useDarkTheme}
          extraLinesSurroundingDiff={args.extraLinesSurroundingDiff}
          hideLineNumbers={args.hideLineNumbers}
          highlightLines={args.highlightLines}
          styles={args.styles}
        />
      </div>
    </ObserveSize>
  );
}

export default StreamlitDiffViewer;
