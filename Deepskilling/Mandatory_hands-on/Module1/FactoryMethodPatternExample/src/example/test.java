package example;

public class test {
	public static void main(String[] args) {
		DocumentFactory factory = new PdfFactory();
		Document doc = factory.createDocument();
		doc.typeOfDocument();
		
		DocumentFactory excelFactory = new ExcelFactory();
		Document edoc = excelFactory.createDocument();
		edoc.typeOfDocument();
		
		DocumentFactory wordFactory = new WordFactory();
		Document wdoc = wordFactory.createDocument();
		wdoc.typeOfDocument();
	}
	}