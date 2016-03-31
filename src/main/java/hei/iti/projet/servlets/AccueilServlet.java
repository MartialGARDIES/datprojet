package hei.iti.projet.servlets;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hei.iti.projet.utils.MotUtils;

/**
 * Servlet implementation class AccueilServlet
 */
@WebServlet("/accueil")
public class AccueilServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	
	private Map<String, String> usersAllowed;
	   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AccueilServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    
    public void init() throws ServletException{
        
    	usersAllowed = new HashMap<>();
    	usersAllowed.put("Georges", "a0643569d7da5b424af7cd2292c3853e656ad68daa32c3f2:5ce2ffb56d08d8181f8ee99899e0dfa5083765e5da488da8");
    	usersAllowed.put("Emile", "a49e1c6880483706f2dc4975b00e3b8ab8621d1995018aa9:1414557c80189c1b618ece92f1bc8a75eed3262182ed600d");
    	usersAllowed.put("Patout", "d2ac02cae06a11e24953e59d946ca953e6dd86ca3bf54236:e9ba03dde21a8bf1d3acadd3c5b652f39cf4b5699be3e6f2");
    }
    
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view	= request.getRequestDispatcher(	"/jsp/accueil.jsp");
		view.forward(request,response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Stockage de l'utilisateur en session.");
		String identifiant = request.getParameter("Login");
		String mdp = request.getParameter("password");
		
		System.out.println("Debut de tentative.");
		
			
		try {
			if(usersAllowed.containsKey(identifiant)&& MotUtils.validerMotDePasse(mdp, usersAllowed.get(identifiant))){
				System.out.println("Tentative en cours");
				request.getSession().setAttribute("utilisateurConnecte",identifiant);
			
				response.sendRedirect("connected");
			}
			else{
				System.out.println("Failure.");
				
			}
		}
		catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Failure");
		}
		
		
		
		
		//doGet(request, response);
		
		response.sendRedirect("accueil");
		
	}

}
