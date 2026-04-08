// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// DYNAMIC UNITS DATA
const units = [
    {
        name: "Web Development",
        assessments: [
            
            "Assets/assesments/Web design 1.pdf",
            "Assets/assesments/Web design 2.pdf",
            "Assets/assesments/Web design 3.pdf"
        ]
    },
    {
        name: "Database Systems",
        assessments: [
            "Assets/assesments/Database 1.pdf",
            "assets/assessments/db2.pdf",
            "assets/assessments/db3.pdf"
        ]
    }
];

// RENDER UNITS
const container = document.getElementById("units-container");

units.forEach(unit => {
    const unitDiv = document.createElement("div");
    unitDiv.className = "unit-card";   // Add this class in CSS for styling

    let assessmentsHTML = "";

    unit.assessments.forEach(pdfPath => {
        // Extract clean filename for display
        const fileName = pdfPath.split('/').pop().replace('.pdf', '');
        
        assessmentsHTML += `
            <div class="assessment-item">
                <span class="pdf-name">${fileName}</span>
                <div class="pdf-buttons">
                    <button onclick="viewPDF('${pdfPath}')" class="btn-view">
                        👁️ View
                    </button>
                    <button onclick="downloadPDF('${pdfPath}')" class="btn-download">
                        ⬇️ Download
                    </button>
                </div>
            </div>
        `;
    });

    unitDiv.innerHTML = `
        <h3>${unit.name}</h3>
        <div class="assessments-list">
            ${assessmentsHTML}
        </div>
    `;

    container.appendChild(unitDiv);
});
// View PDF in new tab
function viewPDF(pdfPath) {
    window.open(pdfPath, '_blank');
}

// Force download
function downloadPDF(pdfPath) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop();   // Use original filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}