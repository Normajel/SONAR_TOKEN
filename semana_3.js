import java.io.*;
public class Main{
public static void main(String [] a)
 {
MiAlumno a1=new MiAlumno("leo","2067772",19,'M',3);
 System.out.println("nombre: "+a1.nom);
 try
 {
 BufferedReader bf=new BufferedReader(new InputStreamReader(System.in));
TAREA SEMANA 3
EVALUACIÓN DE SISTEMAS QA
 System.out.println("ingrese una nota");
 String s1=bf.readLine();
 Double d=new Double(s1);
 double d1=d.doubleValue();
 a1.agregaNota(d1);
 // System.out.println("s1="+s1);

 }
 catch(IOException e1){}
 catch(NumberFormatException e2){System.out.println("debe ingresar un numero decimal");}
 }
}
