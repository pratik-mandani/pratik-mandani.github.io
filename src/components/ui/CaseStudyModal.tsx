// Full case study modal — slides in over the 3D scene for complete project details
import { useEffect } from 'react';
import { useLab } from '../../context/LabContext';
import { projectCaseStudies } from '../../data/portfolioData';

const CATEGORY_COLOR: Record<string, string> = {
  hardware: '#22d3ee',
  embedded: '#f472b6',
  automation: '#fbbf24',
  web: '#818cf8',
};

export function CaseStudyModal() {
  const { state, dispatch } = useLab();
  const project = state.openProjectId
    ? projectCaseStudies.find((p) => p.id === state.openProjectId)
    : null;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  const color = CATEGORY_COLOR[project.category] || '#38bdf8';

  function handleClose() {
    dispatch({ type: 'CLOSE_PROJECT' });
  }

  const allTech = [
    ...(project.hardwareSpecs || []),
    ...(project.firmwareSpecs || []),
    ...(project.softwareSpecs || []),
    ...(project.protocols || []),
    ...(project.pcbSpecs || []),
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(2, 6, 16, 0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backdropFilter: 'blur(4px)',
      }}
      onClick={handleClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#030912',
          border: `1px solid ${color}33`,
          borderTop: `2px solid ${color}`,
          borderRadius: 6,
          width: '100%',
          maxWidth: 820,
          maxHeight: '90vh',
          overflowY: 'auto',
          fontFamily: '"Courier New", Courier, monospace',
          color: '#7dd3fc',
          position: 'relative',
          boxShadow: `0 0 40px ${color}22`,
        }}
      >
        {/* Header */}
        <div style={{ padding: '20px 24px 16px', borderBottom: `1px solid ${color}22`, background: '#050f1e', position: 'sticky', top: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6 }}>
                <span style={{ background: color + '18', border: `1px solid ${color}44`, color, padding: '2px 8px', fontSize: 9, letterSpacing: 2, borderRadius: 2 }}>
                  {project.category.toUpperCase()}
                </span>
                <span style={{ color: '#4a7a9b', fontSize: 9 }}>{project.period}</span>
                {project.companyOrType && (
                  <span style={{ color: '#4a7a9b', fontSize: 9 }}>// {project.companyOrType}</span>
                )}
              </div>
              <h2 style={{ color: '#f0f9ff', fontSize: 18, fontWeight: 700, margin: 0, letterSpacing: 0.5 }}>
                {project.title}
              </h2>
              <div style={{ color: color, fontSize: 10, marginTop: 4 }}>{project.role}</div>
            </div>
            <button
              onClick={handleClose}
              style={{ background: 'none', border: '1px solid #0e3060', color: '#4a7a9b', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontSize: 11, padding: '6px 12px', borderRadius: 2 }}
            >
              [ CLOSE ✕ ]
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px' }}>
          {/* Image placeholder */}
          {project.media && project.media.length > 0 && (
            <div style={{ marginBottom: 20, display: 'flex', gap: 12, overflowX: 'auto' }}>
              {project.media.map((m, i) => (
                <div key={i} style={{
                  minWidth: 200, height: 120, background: '#050f1e', border: `1px solid ${color}22`,
                  borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: 12, flexShrink: 0,
                }}>
                  <div style={{ color: '#1e5a9a', fontSize: 22, marginBottom: 6 }}>
                    {m.placeholderType === 'circuit' ? '⬡' : m.placeholderType === 'schematic' ? '▦' : m.placeholderType === 'machine' ? '◉' : '▣'}
                  </div>
                  <div style={{ color: '#4a7a9b', fontSize: 8, textAlign: 'center', lineHeight: 1.4 }}>
                    PROJECT_IMAGE_PLACEHOLDER
                  </div>
                  <div style={{ color: '#1e5a9a', fontSize: 7, textAlign: 'center', marginTop: 4, lineHeight: 1.3 }}>
                    {m.title}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ color, fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: `1px solid ${color}22`, paddingBottom: 4 }}>
              PROJECT SUMMARY
            </div>
            <p style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.7, margin: 0 }}>{project.summary}</p>
          </div>

          {/* Problem / Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ color: '#ef4444', fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: '1px solid #ef444422', paddingBottom: 4 }}>
                PROBLEM
              </div>
              <p style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                {project.problem}
              </p>
            </div>
            <div>
              <div style={{ color: '#4ade80', fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: '1px solid #4ade8022', paddingBottom: 4 }}>
                SOLUTION
              </div>
              <p style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical specs */}
          {allTech.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: '#22d3ee', fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: '1px solid #22d3ee22', paddingBottom: 4 }}>
                TECHNICAL SPECIFICATIONS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {allTech.map((spec, i) => (
                  <div key={i} style={{
                    background: '#050f1e', border: '1px solid #0e3060',
                    color: '#7dd3fc', fontSize: 9, padding: '4px 10px', borderRadius: 2,
                    lineHeight: 1.4,
                  }}>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testing */}
          {project.testingAndDebugging && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: '#fbbf24', fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: '1px solid #fbbf2422', paddingBottom: 4 }}>
                TESTING & DEBUGGING
              </div>
              <p style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                {project.testingAndDebugging}
              </p>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: '#4ade80', fontSize: 9, letterSpacing: 2, marginBottom: 8, borderBottom: '1px solid #4ade8022', paddingBottom: 4 }}>
                RESULTS & OUTCOMES
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {project.results.map((r, i) => (
                  <li key={i} style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6, paddingLeft: 16, position: 'relative', marginBottom: 4 }}>
                    <span style={{ position: 'absolute', left: 0, color: '#4ade80' }}>◈</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer for company projects */}
          {project.companyOrType !== 'Personal Embedded Project' && (
            <div style={{ marginTop: 16, padding: '8px 12px', background: '#050f1e', border: '1px solid #1e3a5f', borderRadius: 3, fontSize: 9, color: '#4a7a9b', lineHeight: 1.5 }}>
              ℹ No confidential company source code, client data, or proprietary PCB files are published here. Details describe engineering work and learnings only.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
