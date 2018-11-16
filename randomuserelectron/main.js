// cargar la aplicacion de electron
const app=require('electron').app;
// Crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//Ruta del sistema de archivos del S.O.
const path=require('path');
const url= require('url');
//Constantes para imprimir en PDF
const electron=require('electron');
//Ssitema de archivos
const fs=require('fs')
//Sistema operativo
const os=require('os')
//Para declarar una funcion remota
//IPC = llamada a procedimiento interno
const ipc=electron.ipcMain;
//Acceso a la terminal o linea de comandos
const shell=electron.shell;






//Otra forma de declarar una constante
//Pantalla principal
let PantallaPrincipal;


function muestraPantallaPrincipal(){
	//Creamos na pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:1042,height:450});
	//Cargamos en la pantalla el contenido de nuestra pagina
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true

	}))
	//Mostramos la pantalla
	PantallaPrincipal.show();

}

//Eventos para PDF (declaracion)
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if (error) {
				throw error
			}
			shell.openExternal('file://'+pdfPath)
		})
	})

})
app.on('ready', muestraPantallaPrincipal);