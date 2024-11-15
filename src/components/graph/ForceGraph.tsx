import CustomForceGraph from "./CustomForceGraph";
import GraphPropertiesModal from "./GraphPropertiesModal";
import LabelFilterComponent from "./LabelFilterComponent";
import useForceGraph from "./useGraphData";

function ForceGraph({ nodesAndRelationships = {} }: any) {
  const {
    fgRef,
    graphData,
    modalOpen,
    selectedNode,
    hoveredNode,
    uniqueLabels,
    selectedLabels,
    colorObjs,
    handleNodeClick,
    handleCheckboxChange,
    handleHoveredNode,
    getConnectedNodesAndLinks,
    handleModalClose,
    handleShowMore,
  } = useForceGraph(nodesAndRelationships);

  return (
    <>
      {!graphData?.nodes?.length ? (
        <div className="w-full h-screen bg-gradient-to-r flex flex-col items-center justify-center text-white">
          No Data to Display
        </div>
      ) : (
        <CustomForceGraph
          fgRef={fgRef}
          graphData={graphData}
          handleNodeClick={handleNodeClick}
          handleHoveredNode={handleHoveredNode}
          hoveredNode={hoveredNode}
          getConnectedNodesAndLinks={getConnectedNodesAndLinks}
        />
      )}
      {/* 
      <LabelFilterComponent
        uniqueLabels={uniqueLabels}
        selectedLabels={selectedLabels}
        handleCheckboxChange={handleCheckboxChange}
        colorObjs={colorObjs}
      /> */}

      <GraphPropertiesModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        selectedNode={selectedNode}
        handleShowMore={handleShowMore}
      />
    </>
  );
}

export default ForceGraph;
