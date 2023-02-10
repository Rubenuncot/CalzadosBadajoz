using CalzadosBadajoz.Comun;
using CalzadosBadajoz.Modelo;
using CalzadosBadajoz.Negocio;
using MusicaLMFL.Modelo;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace CalzadosBadajoz.Controllers
{
    public class ZapatoController : Controller
    {
        private ControlAccesoDAO<TZapato> control = new ControlAccesoDAO<TZapato>();

        public ActionResult Consultar()
        {
            List<TZapato> list = new List<TZapato>();

            foreach (var item in control.Obtener(new TZapato().GetType()))
            {
                list.Add((TZapato)item);
            }

            return View(list);
        }

        [HttpPost]
        public ActionResult CarroCompra()
        {
            List<TZapato> list = new List<TZapato>();

            foreach (var item in control.Obtener(new TZapato().GetType()))
            {
                list.Add((TZapato)item);
            }

            return View(list);
            
        }

        public ActionResult CarritoCompra()
        {
            return View("CarroCompra");
        }

        public PartialViewResult borrarZapato(string CodZapato)
        {
            control.BorradoVirtual((TZapato)control.Buscar(new TZapato().GetType(), CodZapato));            
            object[] modelos = new object[1];            
            modelos[0] = control.Obtener(new TZapato().GetType());            
            return PartialView("_BorrarZapato", modelos);           
        }

        public ActionResult verZapato(string CodZapato)
        {
            return PartialView("_verZapato", (TZapato)control.Buscar(new TZapato().GetType(), CodZapato));         
        }

        public ActionResult addZapato()
        {
            return View(control.Obtener(typeof(TZapato)));
        }

        [HttpPost]
        public ActionResult addZapato(TZapato zapato)
        {
            try
            {
                List<object> zapatos = new List<object>();
                zapato.Precio = zapato.Precio.Replace(".", ",");
                zapato.CodZapato = Util.GenerarCodigo(zapato.GetType());
                zapato.Borrado = "0";
                zapato.Formatouno = zapato.Formatouno == null ? "N/A" : zapato.Formatouno;
                zapato.Formatodos = zapato.Formatodos == null ? "N/A" : zapato.Formatodos;
                zapato.Formatotres = zapato.Formatotres == null ? "N/A" : zapato.Formatotres;
                zapatos.Add((TZapato)zapato);
                if (control.Insertar(zapatos))
                {
                    return Json("Zapato insertado correctamente");
                }

            }
            catch (Exception e)
            {
                return Json(Errores.ControlErrores(e));                
            }
            return RedirectToAction("Inicio");
        }

        public ActionResult modificarZapato(string codZapato)
        {
            object[] modelos = new object[2];
            modelos[0] = control.Buscar(new TZapato().GetType(), codZapato);
            return View(modelos);
        }

        [HttpPost]
        public ActionResult modificarZapato(TZapato zapato)
        {            
            try
            {
                zapato.Precio = zapato.Precio.Replace(".", ",");
                zapato.Borrado = "0";
                zapato.Formatouno = zapato.Formatouno == null ? "N/A" : zapato.Formatouno;
                zapato.Formatodos = zapato.Formatodos == null ? "N/A" : zapato.Formatodos;
                zapato.Formatotres = zapato.Formatotres == null ? "N/A" : zapato.Formatotres;
                control.Modificar(zapato.CodZapato, zapato);
                return RedirectToAction("Consultar");
            }
            catch (Exception e)
            {
                return Content(Mensaje.mostrarmensaje(Errores.ControlErrores(e), "modificarZapato"));
            }
        }

        [HttpPost]
        public ActionResult obtenerZapatos(string CodZapato)
        {
            object[] modelos = new object[1];            
            modelos[0] = control.Buscar(new TZapato().GetType(), CodZapato);
            return Json(modelos);
        }

        [HttpPost]
        public ActionResult comprar(List<TLinea> data)
        {
            TFactura factura = new TFactura("", ((TUsuario)Session["usuario"]).Nick, DateTime.Now.ToShortDateString());
            factura.CodFactura = Util.GenerarCodigo(factura.GetType());
            List<object> listaFacturaTemp = new List<object>();
            listaFacturaTemp.Add(factura);
            List<object> listaLineasFactura = new List<object>();

            foreach (TLinea linea in data)
            {
                TLineaFactura lineaTemp = new TLineaFactura(factura.CodFactura, linea.Zapato, linea.Cantidad.ToString(), linea.Total.ToString());
                listaLineasFactura.Add(lineaTemp);
            }

            control.Insertar(listaLineasFactura);
            control.Insertar(listaFacturaTemp);
            return Json("Factura guardada correctamente");      
        }
    }
}
