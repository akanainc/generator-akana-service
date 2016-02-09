package <%= props.namespace %>;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import com.soa.documentation.annotation.Api;
import com.soa.documentation.annotation.ApiOperation;
import com.soa.documentation.annotation.ApiParameter;
import com.soa.persistence.query.criteria.QueryCriteria;

/**
 * Service Implementation
 *
 * @author <%= props.author %>
 *
 */
@Api(title = "<%= props.component %>", 
vendor = "Akana", 
version = "<%= props.bundleVersion %>", 
description = "<%= props.description %>")
@Path("/<%=props.component.toLowerCase()%>")
public class <%= props.component %>Service {
	
	/**
	 * @return timestamp
	 */
	@GET
	@Path("/")
	@Produces({ MediaType.APPLICATION_JSON})
	public String echo() {
		return "hello";
	}
	
	/**
	 * 
	 * Based on SecurityWrapper api should get access to login user, to construct list of possible constraints  
	 * 
	 * 
	 * @return list of addition filter to be applied while executing Query
	 */
	/*
	@GET
	@Path("{domainName}/{userName}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@ApiOperation(summary="Get Data Filter Records", description="Get Data Records For user")
	public QueryCriteria getFilters(
			@ApiParameter(description="Domain Name.", required=true) @PathParam("domainName") String domainName,
			@ApiParameter(description="User Name.", required=true) @PathParam("userName") String userName,
			@Context UriInfo uris);
	*/

}