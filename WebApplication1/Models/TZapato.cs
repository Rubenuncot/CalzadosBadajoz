using CalzadosBadajoz.Comun;


namespace CalzadosBadajoz.Modelo
{
    public class TZapato
    {
        public string CodZapato { get; set; }
        public string Marca { get; set; }
        public string Nombre { get; set; }
        public string Precio { get; set; }
        public string Formatouno { get; set; }
        public string Formatodos { get; set; }
        public string Formatotres { get; set; }
        public string Estado { get; set; }
        public string Imagen { get; set; }
        public string Borrado { get; set; }

        public TZapato(string codZapato, string marca, string nombre, string precio, string formatouno, string formatodos, string formatotres, string estado, string imagen, string borrado)
        {   this.CodZapato = codZapato;
            this.Marca = marca;
            this.Nombre = nombre;
            this.Precio = precio;
            this.Formatouno = formatouno;
            this.Formatodos = formatodos;
            this.Formatotres = formatotres;
            this.Estado = estado;
            this.Imagen = imagen;
            this.Borrado = borrado;
        }
        public TZapato(string marca, string nombre, string precio, string formatouno, string formatodos, string formatotres, string estado, string imagen)
        {   
            this.CodZapato = Util.GenerarCodigo(this.GetType());
            this.Marca= marca;
            this.Nombre = nombre;
            this.Precio = precio;
            this.Formatouno = formatouno;
            this.Formatodos = formatodos;
            this.Formatotres = formatotres;
            this.Estado = estado;
            this.Imagen = imagen;
            this.Borrado = "0";
        }
        public TZapato() { }

        public override string ToString()
        {
            return CodZapato + ": " +Nombre.ToUpper();
        }

    }

    

}
