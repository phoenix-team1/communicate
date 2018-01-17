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
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_REGISTER_APNS_RS = function() {
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
 * @returns {userpack.T_REGISTER_APNS_RS}
 */
userpack.T_REGISTER_APNS_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_REGISTER_APNS_RS=} obj
 * @returns {userpack.T_REGISTER_APNS_RS}
 */
userpack.T_REGISTER_APNS_RS.getRootAsT_REGISTER_APNS_RS = function(bb, obj) {
  return (obj || new userpack.T_REGISTER_APNS_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
userpack.T_REGISTER_APNS_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_REGISTER_APNS_RS.prototype.deviceToken = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_REGISTER_APNS_RS.startT_REGISTER_APNS_RS = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
userpack.T_REGISTER_APNS_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deviceTokenOffset
 */
userpack.T_REGISTER_APNS_RS.addDeviceToken = function(builder, deviceTokenOffset) {
  builder.addFieldOffset(1, deviceTokenOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_REGISTER_APNS_RS.endT_REGISTER_APNS_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_REGISTER_APNS_RS.finishT_REGISTER_APNS_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;
