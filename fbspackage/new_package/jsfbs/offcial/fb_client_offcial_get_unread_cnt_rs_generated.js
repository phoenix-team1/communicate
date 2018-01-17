// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var offcialpack = offcialpack || {};

/**
 * @constructor
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS}
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS=} obj
 * @returns {offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS}
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.getRootAsT_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS = function(bb, obj) {
  return (obj || new offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.prototype.unreadCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.startT_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} unreadCount
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.addUnreadCount = function(builder, unreadCount) {
  builder.addFieldInt32(1, unreadCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.endT_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
offcialpack.T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RS.finishT_CLIENT_OFFCIAL_GET_UNREAD_CNT_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.offcialpack = offcialpack;
