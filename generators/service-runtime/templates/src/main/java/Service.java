package <%= props.namespace %>;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import com.digev.fw.exception.GException;
import com.soa.documentation.annotation.Api;
import com.soa.documentation.annotation.ApiOperation;
import com.soa.documentation.annotation.ApiParameter;
import com.soa.persistence.query.criteria.QueryCriteria;

/**
 * Service Implementation
 *
 * @author <%= props.email %>
 *
 */
@Api(title = "<%= props.title %>", 
vendor = "<%= props.author %> - <%= props.email %>", 
version = "<%= props.bundleVersion %>", 
description = "<%= props.description %>")
@Path("/<%=props.component.toLowerCase()%>")
public class <%= props.component %>Service implements NoSqlDBConstant{
	
	private com.soa.persistence.dao.BaseDao baseQueryDao;

    public void setBaseQueryDao(com.soa.persistence.dao.BaseDao baseQueryDao) {
        this.baseQueryDao = baseQueryDao;
    }



    /**
     * @return timestamp
     */
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String echo() throws GException {
        try {
            baseQueryDao.getStats(SERVICE_DB_COLLECTION);
        } catch (com.mongodb.MongoCommandException mce) {
            baseQueryDao.createStore(SERVICE_DB_COLLECTION, null, null);
        }

        return baseQueryDao.getStats(SERVICE_DB_COLLECTION).toString();

    }

	


}