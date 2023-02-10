using CalzadosBadajoz.Comun;


namespace MusicaLMFL.Modelo
{
    public class TLinea
    {
        public string CodFactura { get; set; }
        public string Zapato { get; set; }
        public string Cantidad { get; set; }
        public string Total { get; set; }

        public TLinea(string codFactura, string zapato, string cantidad, string total)
        {
            CodFactura = codFactura;
            Zapato = zapato;
            Cantidad = cantidad;
            Total = total;
        }

        public TLinea(string zapato, string cantidad, string total)
        {
            CodFactura = Util.GenerarCodigo(this.GetType());
            Zapato = zapato;
            Cantidad = cantidad;
            Total = total;
        }

        public TLinea() { }

        public override string ToString()
        {
            return CodFactura+": " + Zapato.ToUpper();
        }

    }

    

}
