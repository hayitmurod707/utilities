import ExcelJS from 'exceljs';
const exportToExcel = async ({ columns, rows, name }) => {
   const workbook = new ExcelJS.Workbook();
   const workSheet = workbook.addWorksheet('WorkSheet', {
      pageSetup: { paperSize: 9, orientation: 'portrait' },
   });
   workSheet.columns = columns;
   workSheet.addRows(rows);
   return workbook.xlsx.writeBuffer({ base64: true }).then(buffer => {
      const base64 = buffer.toString('base64');
      const link = document.createElement('a');
      link.setAttribute('type', 'hidden');
      link.download = `${name}.xlsx`;
      link.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
   });
};
export default exportToExcel;
