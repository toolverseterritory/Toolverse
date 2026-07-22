async function mergePDF() {
    const files = document.getElementById("pdfFiles").files;

    if (files.length < 2) {
        alert("Please select at least 2 PDF files.");
        return;
    }

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes);

        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());

        pages.forEach(page => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    const blob = new Blob([mergedBytes], { type: "application/pdf" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Merged.pdf";
    link.click();

    document.getElementById("status").innerText = "✅ PDF Merged Successfully";
}
